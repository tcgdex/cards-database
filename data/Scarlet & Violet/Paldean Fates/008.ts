import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flare Veil",
			fr: "Voile Flamboyant",
			es: "Velo Ígneo",
			it: "Fuocovelo",
			pt: "Véu de Chamas",
			de: "Flammenschleier"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			de: "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card