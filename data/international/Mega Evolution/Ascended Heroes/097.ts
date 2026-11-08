import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Mimikyu",
		'fr-fr': "Mimiqui de la Team Rocket",
		'es-es': "Mimikyu del Team Rocket",
		'es-mx': "Mimikyu del Equipo Rocket",
		'de-de': "Team Rockets Mimigma",
		'it-it': "Mimikyu del Team Rocket",
		'pt-br': "Mimikyu da Equipe Rocket"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Gemstone Mimicry",
			'fr-fr': "Gemme Mimique",
			'es-es': "Mimetismo Gema",
			'es-mx': "Gema de Imitación",
			'de-de': "Edelstein-Imitation",
			'it-it': "Imitagemma",
			'pt-br': "Mimetismo de Joias"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Tera Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Téracristal Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'es-es': "Elige uno de los ataques del Pokémon Teracristal Activo de tu rival y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Teracristal Activo de tu rival y úsalo como este ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Terakristall-Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'it-it': "Scegli un attacco del Pokémon Teracristal attivo del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Tera Ativo do seu oponente e use-o como este ataque."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869708,
			tcgplayer: 675909
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870290,
			tcgplayer: 677069
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870289,
			tcgplayer: 676929
		}
	},
],
}

export default card
