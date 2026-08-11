import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Unfazed Fat",
			'fr-fr': "Graisse Impassible",
			'es-es': "Grasa Impávida",
			'it-it': "Grasso Imperturbabile",
			'pt-br': "Gordura Inabalável",
			'de-de': "Unbeirrtes Fett"
		},

		effect: {
			'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'es-es': "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon (dano não é um efeito).",
			'de-de': "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Thumping Snore",
			'fr-fr': "Ronflement Retentissant",
			'es-es': "Ronquido Descomunal",
			'it-it': "Russare Tonante",
			'pt-br': "Ronco Feroz",
			'de-de': "Dumpfes Geschnarche"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep. During Pokémon Checkup, flip 2 coins instead of 1. If either of them is tails, this Pokémon is still Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi. Pendant le Contrôle Pokémon, lancez 2 pièces au lieu d'une. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido. Durante el Chequeo Pokémon, lanza 2 monedas en vez de 1. Si sale cruz en alguna de ellas, este Pokémon sigue Dormido.",
			'it-it': "Questo Pokémon viene addormentato. Durante il controllo Pokémon, lancia due volte una moneta invece di una. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
			'pt-br': "Este Pokémon agora está Adormecido. Durante o Checape Pokémon, jogue 2 moedas ao invés de 1. Se qualquer uma delas sair coroa, este Pokémon permanecerá Adormecido.",
			'de-de': "Dieses Pokémon schläft jetzt. Wirf beim Pokémon-Check 2 Münzen anstelle von 1. Wenn eine oder beide Münzen Zahl zeigen, schläft dieses Pokémon weiter."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670829,
				tcgplayer: 284270
			}
		},
	],
}

export default card
