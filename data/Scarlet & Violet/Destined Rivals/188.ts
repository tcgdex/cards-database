import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Hydrapple",
		fr: "Pomdorochi",
		de: "Hydrapfel",
		it: "Hydrapple",
		es: "Hydrapple",
		pt: "Hydrapple",
		'es-mx': "Hydrapple"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Hydra Breath",
			fr: "Soufflorochi",
			de: "Hydrahauch",
			it: "Idraspiro",
			es: "Hidraliento",
			pt: "Hálito da Hidra",
			'es-mx': "Hidraliento"
		},

		effect: {
			en: "Discard 6 Basic {G} Energy cards from your hand, and Knock Out your opponent's Active Pokémon. If you can't discard 6 cards in this way, this attack does nothing.",
			fr: "Défaussez 6 cartes Énergie {G} de base de votre main, puis mettez K.O. le Pokémon Actif de votre adversaire. Si vous ne pouvez pas défausser 6 cartes de cette façon, cette attaque ne fait rien.",
			de: "Lege 6 Basis-{G}-Energiekarten aus deiner Hand auf deinen Ablagestapel und mache das Aktive Pokémon deines Gegners kampfunfähig. Wenn du auf diese Weise nicht 6 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			it: "Scarta sei carte Energia base {G} che hai in mano e metti KO il Pokémon attivo del tuo avversario. Se non puoi scartare sei carte in questo modo, questo attacco non ha effetto.",
			es: "Descarta 6 cartas de Energía {G} Básica de tu mano y deja Fuera de Combate al Pokémon Activo de tu rival. Si no puedes descartar 6 cartas de esta manera, este ataque no hace nada.",
			pt: "Descarte 6 cartas de Energia {G} Básica da sua mão e Nocauteie o Pokémon Ativo do seu oponente. Se não puder descartar 6 cartas desta forma, este ataque não fará nada.",
			'es-mx': "Descarta 6 cartas de Energía {G} Básica de tu mano y deja Fuera de Combate al Pokémon Activo de tu rival. Si no puedes descartar 6 cartas de esta manera, este ataque no hace nada."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Whip Smash",
			fr: "Frappe Fouet",
			de: "Peitschenschlag",
			it: "Frustata Devastante",
			es: "Golpe Látigo",
			pt: "Chicote Esmagador",
			'es-mx': "Golpazo de Látigo"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'holo'
		},
	]
}

export default card
