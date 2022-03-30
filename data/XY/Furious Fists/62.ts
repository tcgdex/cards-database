import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
		es: "Tyrantrum",
		it: "Tyrantrum",
		pt: "Tyrantrum",
		de: "Monargoras"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		697,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		es: "Tyrunt",
		it: "Tyrunt",
		pt: "Tyrunt",
		de: "Balgoras"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chew Up",
				fr: "Mâchoires Affamées",
				es: "Mascar",
				it: "Masticata",
				pt: "Mastigar",
				de: "Zerkauen"
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 90 more damage.",
				fr: "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 90 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente possuir alguma Energia Especial ligada a ele, este ataque causará 90 de danos adicionais.",
				de: "Wenn an dem Aktiven Pokémon deines Gegners Spezial-Energie angelegt ist, fügt dieser Angriff 90 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
				es: "Giga Impacto",
				it: "Gigaimpatto",
				pt: "Giga Impacto",
				de: "Gigastoß"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
