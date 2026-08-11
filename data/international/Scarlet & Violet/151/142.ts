import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [142],
	set: Set,

	name: {
		'fr-fr': "Ptéra",
		'en-us': "Aerodactyl",
		'es-es': "Aerodactyl",
		'it-it': "Aerodactyl",
		'pt-br': "Aerodactyl",
		'de-de': "Aerodactyl"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Vieil Ambre Ancien",
		'en-us': "Antique Old Amber",
		'es-es': "Ámbar Viejo Antiguo",
		'it-it': "Vecchia Ambra Antica",
		'pt-br': "Âmbar Velho Arcaico",
		'de-de': "Antiker Altbernstein"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Glissement",
			'en-us': "Glide",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Rayon Dés-Évoluant",
			'en-us': "Devolution Ray",
			'es-es': "Rayo Involutivo",
			'it-it': "Raggio di Involuzione",
			'pt-br': "Raio da Involução",
			'de-de': "Rückentwicklungsstrahl"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en plaçant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
			'en-us': "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annullane l'evoluzione prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, reverta a sua evolução colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsstufe auf die Hand gibst."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "Aerodactyl's sawlike fangs can shred skin to tatters—even the skin of Steel-type Pokémon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733737,
				tcgplayer: 516705,
				cardtrader: 261059
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733737,
				tcgplayer: 516705,
				cardtrader: 261059
			}
		},
	],

	illustrator: "Shinji Kanda",

	
}

export default card
