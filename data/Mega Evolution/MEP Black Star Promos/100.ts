import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon ex",
		fr: "Nymphali-ex",
		es: "Sylveon ex",
		de: "Feelinara-ex",
		it: "Sylveon-ex",
		pt: "Sylveon ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [700],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		de: "Evoli",
		it: "Eevee",
		pt: "Eevee",
	},

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Colorful Harmony",
			fr: "Harmonie Colorée",
			es: "Armonía Colorida",
			de: "Bunte Harmonie",
			it: "Armonia Variopinta",
			pt: "Harmonia Colorida",
		},

		effect: {
			en: "This attack does 50 damage for each type of Basic Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque type d'Énergie de base attachée à tous vos Pokémon.",
			es: "Este ataque hace 50 puntos de daño por cada tipo de Energía Básica unida a todos tus Pokémon.",
			de: "Diese Attacke fügt für jeden an alle deine Pokémon angelegten Basis-Energietyp 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni tipo di Energia base assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 50 pontos de dano para cada tipo de Energia Básica ligada a todos os seus Pokémon.",
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895612,
				tcgplayer: 713267
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 910856,
				tcgplayer: 713270
			}
		}
	],
}

export default card
