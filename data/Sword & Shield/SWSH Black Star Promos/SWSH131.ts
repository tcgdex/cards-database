import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [898],
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Shadow Rider Calyrex V",
		fr: "Sylveroy Cavalier d'Effroi V",
		de: "Rappenreiter-Coronospa V",
		es: "Calyrex Jinete Espectral V",
		pt: "Calyrex Cavaleiro Espectral V",
		it: "Calyrex Cavaliere Spettrale V"
	},

	rarity: "None",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cloak in Shadows",
			fr: "Cape d'Effroi",
			de: "Schattengewand",
			es: "Manto Sombrío",
			pt: "Manto de Penumbra",
			it: "Manto Ombre"
		},

		effect: {
			en: "Attach a {P} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {P} de votre pile de défausse à ce Pokémon.",
			de: "Lege 1 {P}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			es: "Une 1 carta de Energía {P} de tu pila de descartes a este Pokémon.",
			pt: "Ligue 1 carta de Energia {P} da sua pilha de descarte a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia {P} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Hollow Binding",
			fr: "Entrave Éthérée",
			de: "Fesselnde Macht",
			es: "Atadura Hueca",
			pt: "Aprisionamento Vazio",
			it: "Vincolo Vacuo"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
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
	suffix: "V"
}

export default card
