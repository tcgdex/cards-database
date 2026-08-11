import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poltchageist",
		'fr-fr': "Poltchageist",
		'es-es': "Poltchageist",
		'es-mx': "Poltchageist",
		'de-de': "Mortcha",
		'it-it': "Poltchageist",
		'pt-br': "Poltchageist"
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
			'en-us': "Hide 'n' Sneak",
			'fr-fr': "Cachette en Douce",
			'es-es': "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			'de-de': "Listiges Versteckspiel",
			'it-it': "Nascondino Furbino",
			'pt-br': "Esconde-some"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets des attaques et des talents des Pokémon de votre adversaire infligés à ce Pokémon. (Les dégâts ne sont pas un effet.)",
			'es-es': "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las Habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'de-de': "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti degli attacchi e delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques e Habilidades dos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Furtive Drop",
			'fr-fr': "Chute Furtive",
			'es-es': "Caída Furtiva",
			'es-mx': "Caída Furtiva",
			'de-de': "Hinterhältiger Fall",
			'it-it': "Lascito Furtivo",
			'pt-br': "Gota Furtiva"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Place 1 damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'es-mx': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners.",
			'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente."
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
