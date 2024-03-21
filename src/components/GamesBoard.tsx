import React from "react";
import GameCard from "./GameCard";
import { GameService } from "@/services/game.service";

export interface GameInfo {
	_id: string;
	id: string;
	slug?: string;
	name: string;
	metacritic?: number;
	released?: string;
	tba?: string;
	updated?: string;
	website?: string;
	rating?: number;
	rating_top?: number;
	playtime?: number;
	achievements_count?: number;
	ratings_count?: number;
	suggestions_count?: number;
	game_series_count?: number;
	reviews_count?: number;
	platforms?: string;
	developers?: string;
	genres?: string;
	publishers?: string;
	esrb_rating?: number;
	added_status_yet?: number;
	added_status_owned?: number;
	added_status_beaten?: number;
	added_status_toplay?: number;
	added_status_dropped?: number;
	added_status_playing?: number;
}

const GamesBoard = async ({
	searchParams,
}: {
	searchParams?: {
		limit?: string;
		offset?: string;
		name?: string;
		params?: string;
		genres?: string;
		platforms?: string;
	};
}) => {
	const { limit, offset, name, platforms, genres } = searchParams || {};

	const games = await GameService.getAllGames({
		limit,
		offset,
		name,
		platforms,
		genres,
	});

	return (
		<div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 w-full">
			{games.records.map((game) => (
				<GameCard gameInfo={game} key={game._id} />
			))}
		</div>
	);
};

export default GamesBoard;
