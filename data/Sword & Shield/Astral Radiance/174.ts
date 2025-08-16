import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [903],
	set: Set,

	name: {
		en: "Hisuian Sneasler V",
		fr: "Farfurex de Hisui V",
		es: "Sneasler de Hisui V",
		it: "Sneasler di Hisui V",
		pt: "Sneasler de Hisui V",
		de: "Hisui-Snieboss V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			en: "Poison Claws",
			fr: "Griffes Empoisonnées",
			es: "Garras Venenosas",
			it: "Velenartigli",
			pt: "Garras Venenosas",
			de: "Giftkrallen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Dire Claw",
			fr: "Griffes Funestes",
			es: "Garra Nociva",
			it: "Artigli Fatali",
			pt: "Garra Catastrófica",
			de: "Unheilsklauen"
		},

		effect: {
			en: "This attack does 80 damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 80 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 80 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 80 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 80 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 80 Schadenspunkte zu."
		},

		damage: "80×"
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658732,
		tcgplayer: 272424
	}
}

export default card