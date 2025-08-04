import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		es: "Scizor",
		it: "Scizor",
		pt: "Scizor",
		de: "Scherox"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				es: "Exosqueleto",
				it: "Esoscheletro",
				pt: "Exo-esqueleto",
				de: "Exoskelett"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por ataques se reduce en 10 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 10, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado a este Pokémon por ataques será reduzido em 10 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Special Blow",
				fr: "Coup Spécial",
				es: "Golpe Especial",
				it: "Colpo Speciale",
				pt: "Golpe Extraordinário",
				de: "Spezialschlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
				fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365763,
		tcgplayer: 178941
	}
}

export default card
