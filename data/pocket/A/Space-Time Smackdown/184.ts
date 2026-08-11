import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mismagius ex",
		'fr-fr': "Magirêve-ex",
		'es-es': "Mismagius ex",
		'it-it': "Mismagius-ex",
		'de-de': "Traunmagil-ex",
		'pt-br': "Mismagius ex",
		'ko-kr': "무우마직 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [429],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Magical Delusion",
			'fr-fr': "Voyage Magique",
			'es-es': "Ilusión Mágica",
			'it-it': "Magillusione",
			'de-de': "Magischer Wahn",
			'pt-br': "Delusão Mágica",
			'ko-kr': "매지컬트립"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			
			'ko-kr': "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card