import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Souvenir",
			fr: "Cadeau-Souvenir",
			es: "Souvenir",
			it: "Souvenir",
			pt: "Suvenir",
			de: "Souvenir"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wonder Flash",
			fr: "Flash Merveilleux",
			es: "Destello Asombroso",
			it: "Flash Meraviglia",
			pt: "Clarão Encantador",
			de: "Wundersamer Schein"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Dragon Pokémon, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Dragon, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Dragon, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Dragon, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Dragon, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Dragon-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card