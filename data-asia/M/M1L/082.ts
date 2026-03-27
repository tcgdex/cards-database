import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイトゴング",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "Search your deck for a Fighting type Basic Pokémon or for a Basic Fighting Energy, reveal it, and put it into your hand. Then shuffle your deck.",
	},


	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Illustration rare",
};

export default card;
