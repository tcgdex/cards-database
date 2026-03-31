import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Mega Clefable ex",
		fr: "Méga-Mélodelfe-ex",
		es: "Mega-Clefable ex",
		de: "Mega-Pixi-ex",
		it: "Mega Clefable-ex",
		pt: "Mega Clefable ex"
	},
	set: Set,
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [
		36
	],
	hp: 320,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		"es-mx": "Clefairy",
		de: "Piepi",
		it: "Clefairy",
		pt: "Clefairy"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Luminous Wing",
				fr: "Aile Luminescente",
				es: "Ala Luminosa",
				de: "Luminöse Flügel",
				it: "Ala Luminosa",
				pt: "Asa Luminosa"
			},
			effect: {
				en: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
				fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
				es: "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
				de: "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
				it: "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
				pt: "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a este Pokémon."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic"
			],
			name: {
				en: "Shooting Moons",
				fr: "Tirs de Lunes",
				es: "Disparo Lunar",
				de: "Mondschnuppen",
				it: "Lune Cadenti",
				pt: "Luas Cadentes"
			},
			damage: "120+",
			effect: {
				en: "You may discard up to 4 Energy cards from your hand, and this attack does 40 more damage for each card you discarded in this way.",
				fr: "Vous pouvez défausser jusqu'à 4 cartes Énergie de votre main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Puedes descartar hasta 4 cartas de Energía de tu mano, y este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
				de: "Du kannst bis zu 4 Energiekarten aus deiner Hand auf deinen Ablagestapel legen, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu.",
				it: "Puoi scartare fino a quattro carte Energia dalla tua mano e questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Você pode descartar até 4 cartas de Energia da sua mão, e este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma."
			}
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Cona Nitanda",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684385,
		cardmarket: 877536
	}
}

export default card
