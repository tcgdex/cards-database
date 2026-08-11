import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [423],
	set: Set,

	name: {
		'en-us': "Gastrodon",
		'fr-fr': "Tritosor",
		'es-es': "Gastrodon",
		'it-it': "Gastrodon",
		'pt-br': "Gastrodon",
		'de-de': "Gastrodon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'pt-br': "Shellos",
		'de-de': "Schalellos"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sticky Bind",
			'fr-fr': "Entrave Collante",
			'es-es': "Sujeción Pegajosa",
			'it-it': "Legame Viscoso",
			'pt-br': "Aprisionamento Pegajoso",
			'de-de': "Klebrige Fessel"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, Benched Stage 2 Pokémon (both yours and your opponent's) have no Abilities.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, les Pokémon de Banc de Niveau 2 (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
			'es-es': "Mientras este Pokémon esté en tu Banca, los Pokémon de Fase 2 en Banca (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, i Pokémon di Fase 2 in panchina, sia tuoi che del tuo avversario, non hanno abilità.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, os Pokémon Estágio 2 no Banco (seus e do seu oponente) não terão Habilidades.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, haben Phase-2-Pokémon auf der Bank (deiner und der deines Gegners) keine Fähigkeiten."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794433,
				tcgplayer: 589953
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794433,
				tcgplayer: 589953
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858727,
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Scav",

}

export default card
