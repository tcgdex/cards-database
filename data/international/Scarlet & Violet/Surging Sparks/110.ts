import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'de-de': "Demeteros"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Fist of Focus",
			'fr-fr': "Poing Déterminé",
			'es-es': "Puño Fulminante",
			'it-it': "Focalpugno",
			'pt-br': "Punho do Foco",
			'de-de': "Fokus-Faust"
		},

		effect: {
			'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Buster Swing",
			'fr-fr': "Repoussoir",
			'es-es': "Golpe Destructor",
			'it-it': "Colpaccio",
			'pt-br': "Gingado",
			'de-de': "Widerstandsbrecher"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794440,
				tcgplayer: 589980
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794440,
				tcgplayer: 589980
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card
