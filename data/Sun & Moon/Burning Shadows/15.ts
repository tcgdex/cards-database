import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Net",
				fr: "Filet de Bulles",
				es: "Red Pompa",
				it: "Retebolla",
				pt: "Rede de Bolha",
				de: "Wasserblasennetz"
			},
			effect: {
				en: "Energy can’t be attached to the Defending Pokémon from your opponent’s hand during their next turn.",
				fr: "Aucune Énergie ne peut être attachée au Pokémon Défenseur de la main de votre adversaire pendant son prochain tour.",
				es: "No se puede unir Energía al Pokémon Defensor de la mano de tu rival durante su próximo turno.",
				it: "Nessuna Energia può essere assegnata al Pokémon difensore dalla mano del tuo avversario durante il suo prossimo turno.",
				pt: "Energias não poderão ser ligadas ao Pokémon Defensor da mão do seu oponente durante a próxima vez dele(a) jogar.",
				de: "Energie aus der Hand deines Gegners kann während seines nächsten Zuges nicht an das Verteidigende Pokémon angelegt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299422,
		tcgplayer: 138285
	}
}

export default card
