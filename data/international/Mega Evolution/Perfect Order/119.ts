import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [36],

	name: {
		'en-us': "Mega Clefable ex",
		'fr-fr': "Méga-Mélodelfe-ex",
		'es-es': "Mega-Clefable ex",
		'es-mx': "Mega-Clefable ex",
		'de-de': "Mega-Pixi-ex",
		'it-it': "Mega Clefable-ex",
		'pt-br': "Mega Clefable ex"
	},
	evolveFrom: {
		'en-us': "Clefairy",
		'de-de': "Piepi",
		'es-es': "Clefairy",
		'fr-fr': "Mélofée",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
	},

	suffix: "ex",
	illustrator: "Cona Nitanda",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Luminous Wing",
			'fr-fr': "Aile Luminescente",
			'es-es': "Ala Luminosa",
			'es-mx': "Ala Luminosa",
			'de-de': "Luminöse Flügel",
			'it-it': "Ala Luminosa",
			'pt-br': "Asa Luminosa"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			'fr-fr': "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			'es-es': "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			'es-mx': "Se evitan todos los efectos de las Habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			'de-de': "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
			'it-it': "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Shooting Moons",
			'fr-fr': "Tirs de Lunes",
			'es-es': "Disparo Lunar",
			'es-mx': "Disparo Lunar",
			'de-de': "Mondschnuppen",
			'it-it': "Lune Cadenti",
			'pt-br': "Luas Cadentes"
		},

		effect: {
			'en-us': "You may discard up to 4 Energy cards from your hand, and this attack does 40 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 4 cartes Énergie de votre main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 4 cartas de Energía de tu mano, y este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'es-mx': "Puedes descartar hasta 4 cartas de Energía de tu mano, y este ataque hace 40 puntos de daño más por cada carta que descartaste de esta manera.",
			'de-de': "Du kannst bis zu 4 Energiekarten aus deiner Hand auf deinen Ablagestapel legen, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu.",
			'it-it': "Puoi scartare fino a quattro carte Energia dalla tua mano e questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar até 4 cartas de Energia da sua mão, e este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684385,
				cardmarket: 877536
			}
		}
	],

}

export default card
