import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [368],
	set: Set,

	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		es: "Gorebyss",
		it: "Gorebyss",
		pt: "Gorebyss",
		de: "Saganabyss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Canceler",
			fr: "Inhibiteur de Mille Poings",
			es: "Cancelador de Golpe Fluido",
			it: "Annientamento Colpo Rapido",
			de: "Fließender-Angriff-Abwehr",
			pt: "Cancelador Golpe Fluido"
		},

		effect: {
			en: "Your opponent's Rapid Strike Pokémon in play have no Abilities.",
			fr: "Les Pokémon Mille Poings en jeu de votre adversaire n'ont pas de talent.",
			es: "Los Pokémon Golpe Fluido en juego de tu rival no tienen ninguna habilidad.",
			it: "I Pokémon Colpo Rapido in gioco del tuo avversario non hanno abilità.",
			de: "Die Fließender-Angriff-Pokémon deines Gegners im Spiel haben keine Fähigkeiten.",
			pt: "Os Pokémon Golpe Fluido em jogo do seu oponente não têm Habilidades."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			de: "Diebeskuss",
			pt: "Beijo Drenante"
		},

		damage: 50,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582201
	}
}

export default card