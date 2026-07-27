import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		'es-mx': "Poltchageist",
		de: "Mortcha",
		it: "Poltchageist",
		pt: "Poltchageist"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak",
			fr: "Cachette en Douce",
			es: "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			de: "Listiges Versteckspiel",
			it: "Nascondino Furbino",
			pt: "Esconde-some"
		},

		effect: {
			en: "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets des attaques et des talents des Pokémon de votre adversaire infligés à ce Pokémon. (Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las Habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			de: "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			it: "Previeni tutti gli effetti degli attacchi e delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques e Habilidades dos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		name: {
			en: "Furtive Drop",
			fr: "Chute Furtive",
			es: "Caída Furtiva",
			'es-mx': "Caída Furtiva",
			de: "Hinterhältiger Fall",
			it: "Lascito Furtivo",
			pt: "Gota Furtiva"
		},

		cost: ["Colorless"],

		effect: {
			en: "Place 1 damage counter on your opponent's Active Pokémon.",
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners.",
			it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895793,
				tcgplayer: 704762
			}
		},
	],
}

export default card
