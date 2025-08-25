import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [142],
	set: Set,

	name: {
		fr: "Ptéra",
		en: "Aerodactyl",
		es: "Aerodactyl",
		it: "Aerodactyl",
		pt: "Aerodactyl",
		de: "Aerodactyl"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Glissement",
			en: "Glide",
			es: "Planeo",
			it: "Aliante",
			pt: "Planeio",
			de: "Gleiten"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Rayon Dés-Évoluant",
			en: "Devolution Ray",
			es: "Rayo Involutivo",
			it: "Raggio di Involuzione",
			pt: "Raio da Involução",
			de: "Rückentwicklungsstrahl"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en plaçant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon evolucionado, involuciónalo poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, annullane l'evoluzione prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, reverta a sua evolução colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente.",
			de: "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, rückentwickle es, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsstufe auf die Hand gibst."
		},

		damage: 100
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Shinji Kanda",

	thirdParty: {
		cardmarket: 733737
	}
}

export default card
