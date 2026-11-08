import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1019],
	set: Set,

	name: {
		'en-us': "Hydrapple",
		'fr-fr': "Pomdorochi",
		'de-de': "Hydrapfel",
		'it-it': "Hydrapple",
		'es-es': "Hydrapple",
		'pt-br': "Hydrapple",
		'es-mx': "Hydrapple"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dipplin",
		'fr-fr': "Pomdramour",
		'de-de': "Sirapfel",
		'it-it': "Dipplin",
		'es-es': "Dipplin",
		'pt-br': "Dipplin",
		'es-mx': "Dipplin"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Hydra Breath",
			'fr-fr': "Soufflorochi",
			'de-de': "Hydrahauch",
			'it-it': "Idraspiro",
			'es-es': "Hidraliento",
			'pt-br': "Hálito da Hidra",
			'es-mx': "Hidraliento"
		},

		effect: {
			'en-us': "Discard 6 Basic {G} Energy cards from your hand, and Knock Out your opponent's Active Pokémon. If you can't discard 6 cards in this way, this attack does nothing.",
			'fr-fr': "Défaussez 6 cartes Énergie {G} de base de votre main, puis mettez K.O. le Pokémon Actif de votre adversaire. Si vous ne pouvez pas défausser 6 cartes de cette façon, cette attaque ne fait rien.",
			'de-de': "Lege 6 Basis-{G}-Energiekarten aus deiner Hand auf deinen Ablagestapel und mache das Aktive Pokémon deines Gegners kampfunfähig. Wenn du auf diese Weise nicht 6 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			'it-it': "Scarta sei carte Energia base {G} che hai in mano e metti KO il Pokémon attivo del tuo avversario. Se non puoi scartare sei carte in questo modo, questo attacco non ha effetto.",
			'es-es': "Descarta 6 cartas de Energía {G} Básica de tu mano y deja Fuera de Combate al Pokémon Activo de tu rival. Si no puedes descartar 6 cartas de esta manera, este ataque no hace nada.",
			'pt-br': "Descarte 6 cartas de Energia {G} Básica da sua mão e Nocauteie o Pokémon Ativo do seu oponente. Se não puder descartar 6 cartas desta forma, este ataque não fará nada.",
			'es-mx': "Descarta 6 cartas de Energía {G} Básica de tu mano y deja Fuera de Combate al Pokémon Activo de tu rival. Si no puedes descartar 6 cartas de esta manera, este ataque no hace nada."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Whip Smash",
			'fr-fr': "Frappe Fouet",
			'de-de': "Peitschenschlag",
			'it-it': "Frustata Devastante",
			'es-es': "Golpe Látigo",
			'pt-br': "Chicote Esmagador",
			'es-mx': "Golpazo de Látigo"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825892,
				tcgplayer: 632844
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825892,
				tcgplayer: 632844
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859006,
			}
		},
	],
}

export default card
