import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Unfazed Fat",
			fr: "Graisse Impassible",
			es: "Grasa Impávida",
			it: "Grasso Imperturbabile",
			pt: "Gordura Inabalável",
			de: "Unbeirrtes Fett"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Previeni tutti gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon (dano não é um efeito).",
			de: "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Thumping Snore",
			fr: "Ronflement Retentissant",
			es: "Ronquido Descomunal",
			it: "Russare Tonante",
			pt: "Ronco Feroz",
			de: "Dumpfes Geschnarche"
		},

		effect: {
			en: "This Pokémon is now Asleep. During Pokémon Checkup, flip 2 coins instead of 1. If either of them is tails, this Pokémon is still Asleep.",
			fr: "Ce Pokémon est maintenant Endormi. Pendant le Contrôle Pokémon, lancez 2 pièces au lieu d'une. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
			es: "Este Pokémon pasa a estar Dormido. Durante el Chequeo Pokémon, lanza 2 monedas en vez de 1. Si sale cruz en alguna de ellas, este Pokémon sigue Dormido.",
			it: "Questo Pokémon viene addormentato. Durante il controllo Pokémon, lancia due volte una moneta invece di una. Se esce almeno una volta croce, questo Pokémon resta addormentato.",
			pt: "Este Pokémon agora está Adormecido. Durante o Checape Pokémon, jogue 2 moedas ao invés de 1. Se qualquer uma delas sair coroa, este Pokémon permanecerá Adormecido.",
			de: "Dieses Pokémon schläft jetzt. Wirf beim Pokémon-Check 2 Münzen anstelle von 1. Wenn eine oder beide Münzen Zahl zeigen, schläft dieses Pokémon weiter."
		},

		damage: 180
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card