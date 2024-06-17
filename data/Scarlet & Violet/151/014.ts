import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [14],
	set: Set,

	name: {
		fr: "Coconfort",
		en: "Kakuna",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cocon Protecteur",
			en: "Cocoon Cover",
			es: "Capullo Caparazón",
			it: "Bozzolo Protettivo",
			pt: "Casca de Casulo",
			de: "Kokonschutz"
		},

		effect: {
			fr: "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			es: "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			de: "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Bzzz",
			en: "Zzzt",
			es: "Bzzz",
			it: "Bzzz",
			pt: "Bzzz",
			de: "Piiieks"
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card