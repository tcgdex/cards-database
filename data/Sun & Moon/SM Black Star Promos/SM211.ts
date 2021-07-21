import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Charizard-GX",
		fr: "Dracaufeu-GX",
		es: "Charizard-GX",
		it: "Charizard-GX",
		pt: "Charizard-GX",
		de: "Glurak-GX"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},

			damage: 140,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flare Blitz GX",
				fr: "Boutefeu GX",
				es: "Envite Ígneo GX",
				it: "Fuococarica GX",
				pt: "Blitz de Labaredas GX",
				de: "Flammenblitz GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "(No puedes usar más de 1 ataque GX en una partida).",
				it: "Non puoi usare più di un attacco GX a partita.",
				pt: "(Você não pode usar mais de 1 ataque GX por partida.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3
}

export default card
