import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		pt: "Poliwrath",
		de: "Quappo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hypnosis",
			fr: "Hypnose",
			es: "Hipnosis",
			it: "Ipnosi",
			pt: "Hipnose",
			de: "Hypnose"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Jumping Uppercut",
			fr: "Uppercut Bondissant",
			es: "Gancho Saltarín",
			it: "Saltamontante",
			pt: "Pulo do Gancho",
			de: "Springender Kinnhaken"
		},

		effect: {
			en: "You may do 120 more damage. If you do, shuffle this Pokémon and all attached cards into your deck.",
			fr: "Vous pouvez infliger 120 dégâts supplémentaires. Dans ce cas, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			es: "Puedes hacer 120 puntos de daño más. Si lo haces, pon este Pokémon y todas las cartas unidas a él en la baraja y barájalas todas.",
			it: "Puoi infliggere 120 danni in più. Se lo fai, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Você pode causar 120 pontos de dano a mais. Se fizer isto, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			de: "Du kannst 120 Schadenspunkte mehr zufügen. Wenn du das machst, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Nisota Niso",

	thirdParty: {
		cardmarket: 769217
	}
}

export default card