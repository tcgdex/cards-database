import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [14],
	set: Set,

	name: {
		'fr-fr': "Coconfort",
		'en-us': "Kakuna",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Aspicot",
		'en-us': "Weedle",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cocon Protecteur",
			'en-us': "Cocoon Cover",
			'es-es': "Capullo Caparazón",
			'it-it': "Bozzolo Protettivo",
			'pt-br': "Casca de Casulo",
			'de-de': "Kokonschutz"
		},

		effect: {
			'fr-fr': "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			'de-de': "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Bzzz",
			'en-us': "Zzzt",
			'es-es': "Bzzz",
			'it-it': "Bzzz",
			'pt-br': "Bzzz",
			'de-de': "Piiieks"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733609,
				tcgplayer: 502563,
				cardtrader: 261125
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733609,
				tcgplayer: 502563,
				cardtrader: 261125
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
