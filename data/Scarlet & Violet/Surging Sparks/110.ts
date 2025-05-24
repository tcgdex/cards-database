import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Fist of Focus",
			fr: "Poing Déterminé",
			es: "Puño Fulminante",
			it: "Focalpugno",
			pt: "Punho do Foco",
			de: "Fokus-Faust"
		},

		effect: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			es: "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia da sua pilha de descarte a este Pokémon.",
			de: "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Buster Swing",
			fr: "Repoussoir",
			es: "Golpe Destructor",
			it: "Colpaccio",
			pt: "Gingado",
			de: "Widerstandsbrecher"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card
