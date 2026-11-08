import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [898],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		'en-us': "Shadow Rider Calyrex V",
		'fr-fr': "Sylveroy Cavalier d'Effroi V",
		'de-de': "Rappenreiter-Coronospa V",
		'es-es': "Calyrex Jinete Espectral V",
		'pt-br': "Calyrex Cavaleiro Espectral V",
		'it-it': "Calyrex Cavaliere Spettrale V"
	},

	rarity: "Promo",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Cloak in Shadows",
			'fr-fr': "Cape d'Effroi",
			'de-de': "Schattengewand",
			'es-es': "Manto Sombrío",
			'pt-br': "Manto de Penumbra",
			'it-it': "Manto Ombre"
		},

		effect: {
			'en-us': "Attach a {P} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {P} de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege 1 {P}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía {P} de tu pila de descartes a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia {P} da sua pilha de descarte a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {P} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Hollow Binding",
			'fr-fr': "Entrave Éthérée",
			'de-de': "Fesselnde Macht",
			'es-es': "Atadura Hueca",
			'pt-br': "Aprisionamento Vazio",
			'it-it': "Vincolo Vacuo"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 572540
	}
}

export default card
