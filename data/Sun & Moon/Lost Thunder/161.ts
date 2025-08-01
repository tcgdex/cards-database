import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
		es: "Kecleon",
		it: "Kecleon",
		pt: "Kecleon",
		de: "Kecleon"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 1",
				fr: "Couleur Unitaire 1",
				es: "Color Unidad 1",
				it: "Unione Colore 1",
				pt: "Cor Unitária 1",
				de: "Aggregat-Farbe 1"
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy GrassFireWater attached to it, it is a Grass, Fire, and Water Pokémon.",
				fr: "Tant que de l’Énergie Unitaire GrassFireWater est attachée à ce Pokémon, c’est un Pokémon Grass, Fire et Water.",
				es: "Mientras este Pokémon tenga alguna carta de Energía Unidad GrassFireWater unida a él, es un Pokémon Grass, Fire y Water.",
				it: "Fintanto che ha delle carte Energia Unione GrassFireWater assegnate, questo Pokémon è di tipo Grass, Fire e Water.",
				pt: "Enquanto este Pokémon tiver Energia Unitária GrassFireWater ligada a ele, será um Pokémon Grass, Fire e Water.",
				de: "Solang an dieses Pokémon Aggregat-Energie GrassFireWater angelegt ist, ist es ein Grass-, Fire- und Water-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tongue Smack",
				fr: "Frappe Langue",
				es: "Lengüetada",
				it: "Slinguazzata",
				pt: "Golpe de Língua",
				de: "Zungenschlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365797
	}
}

export default card
