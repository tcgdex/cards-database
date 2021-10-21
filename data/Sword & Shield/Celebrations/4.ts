import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Palkia",
		fr: "Palkia",
		es: "Palkia",
		it: "Palkia",
		pt: "Palkia",
		de: "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			en: "Absolute Space",
			fr: "Espace Absolu",
			es: "Espacio Absoluto",
			it: "Spazio Assoluto",
			pt: "Espaço Absoluto",
			de: "Absoluter Raum"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Stadio che ha in mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da própria mão.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Stadionkarten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		name: {
			en: "Overdrive Smash",
			fr: "Boost Atomisant",
			es: "Sacudida Superdirecta",
			it: "Devastacolpo",
			pt: "Golpe Exaustivo",
			de: "Turbosmash"
		},

		effect: {
			en: "During your next turn, this Pokémon's Overdrive Smash attack does 80 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Sacudida Superdirecta de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Golpe Exaustivo deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			de: "Während deines nächsten Zuges fügt die Attacke Turbosmash dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: "80+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
