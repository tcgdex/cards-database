import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flare Veil",
			'fr-fr': "Voile Flamboyant",
			'es-es': "Velo Ígneo",
			'it-it': "Fuocovelo",
			'pt-br': "Véu de Chamas",
			'de-de': "Flammenschleier"
		},

		effect: {
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			'de-de': "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751534,
				tcgplayer: 534143,
				cardtrader: 274192
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 833342
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751534,
				tcgplayer: 534143,
				cardtrader: 274192
			}
		},
	],

	illustrator: "Tonji Matsuno",

	description: {
		'en-us': "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
	},

}

export default card
