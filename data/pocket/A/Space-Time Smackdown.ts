import { Set } from "../../interfaces";
import serie from "../Pokémon TCG Pocket";

const set: Set = {
	id: "A2",

	name: {
		'de-de': "Kollision von Raum und Zeit",
		'en-us': "Space-Time Smackdown",
		'es-es': "Pugna Espaciotemporal",
		'fr-fr': "Choc Spatio-Temporel",
		'it-it': "Scontro Spaziotemporale",
		"pt-br": "Embate do Tempo e Espaço",
		'ko-kr': "시공의 격투",
	},

	serie: serie,

	cardCount: {
		official: 140,
	},

	boosters: {
		palkia: {
			name: {
				'de-de': "Palkia",
				'en-us': "Palkia",
				'fr-fr': "Palkia",
				'es-es': "Palkia",
				'it-it': "Palkia",
				"pt-br": "Palkia",
				'ko-kr': "펄기아",
			},
		},
		dialga: {
			name: {
				'de-de': "Dialga",
				'en-us': "Dialga",
				'fr-fr': "Dialga",
				'es-es': "Dialga",
				'it-it': "Dialga",
				"pt-br": "Dialga",
				'ko-kr': "디아루가",
			},
		},
	},

	releaseDate: "2025-01-30",
};

export default set;
