import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali",
		'es-es': "Sylveon",
		'it-it': "Sylveon",
		'pt-br': "Sylveon",
		'de-de': "Feelinara"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Souvenir",
			'fr-fr': "Cadeau-Souvenir",
			'es-es': "Souvenir",
			'it-it': "Souvenir",
			'pt-br': "Suvenir",
			'de-de': "Souvenir"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Wonder Flash",
			'fr-fr': "Flash Merveilleux",
			'es-es': "Destello Asombroso",
			'it-it': "Flash Meraviglia",
			'pt-br': "Clarão Encantador",
			'de-de': "Wundersamer Schein"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Dragon Pokémon, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Dragon, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "By releasing enmity-erasing waves from its ribbonlike feelers, Sylveon stops any conflict.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665665,
				tcgplayer: 276976
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665665,
				tcgplayer: 276976
			}
		},
	],
}

export default card
