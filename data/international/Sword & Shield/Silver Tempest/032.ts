import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [727],
	set: Set,

	name: {
		'en-us': "Incineroar",
		'fr-fr': "Félinferno",
		'es-es': "Incineroar",
		'it-it': "Incineroar",
		'pt-br': "Incineroar",
		'de-de': "Fuegro"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Secret Attack",
			'fr-fr': "Attaque Secrète",
			'es-es': "Ataque Secreto",
			'it-it': "Colpo Segreto",
			'pt-br': "Ataque Secreto",
			'de-de': "Geheimattacke"
		},

		effect: {
			'en-us': "Choose an attack from 1 of this Pokémon's previous Evolutions and use it as this attack.",
			'fr-fr': "Choisissez une attaque de l'une des précédentes Évolutions de ce Pokémon et utilisez-la en tant que cette attaque.",
			'es-es': "Elige 1 ataque de 1 de las Evoluciones anteriores de este Pokémon y úsalo para este ataque.",
			'it-it': "Scegli uno degli attacchi degli stadi evolutivi precedenti di questo Pokémon e usalo al posto di questo attacco.",
			'pt-br': "Escolha um ataque de 1 das Evoluções anteriores deste Pokémon e use-o como este ataque.",
			'de-de': "Wähle 1 Attacke einer vorangegangenen Entwicklung dieses Pokémon und setze sie als diese Attacke ein."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flare Shot",
			'fr-fr': "Tir Flambant",
			'es-es': "Disparo Llamarada",
			'it-it': "Colpofiammata",
			'pt-br': "Disparo de Labareda",
			'de-de': "Flackerschuss"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "When its fighting spirit is set alight, the flames around its waist become especially intense.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682074,
				tcgplayer: 451663
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682074,
				tcgplayer: 451663
			}
		},
	],
}

export default card
