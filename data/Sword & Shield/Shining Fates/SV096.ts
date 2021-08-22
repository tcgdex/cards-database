import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lakmécygne",
		en: "Swanna",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Couaneton",
		en: "Ducklett"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cirque Céleste",
			en: "Sky Circus",
			es: "Circo Aéreo",
			it: "Circo Aereo",
			pt: "Circo Aéreo",
			de: "Himmelszirkus"
		},

		effect: {
			fr: "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d’attaques de ce Pokémon.",
			en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon’s attack costs.",
			es: "Si has jugado 1 carta de Ornitólogo de tu mano durante este turno, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			it: "Se hai giocato Avicoltore dalla tua mano durante questo turno, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			pt: "Se você jogou Ornitólogo da sua mão durante este turno, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			de: "Wenn du Vogel-Profi während dieses Zuges aus deiner Hand gespielt hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Coupe Aile",
			en: "Feather Slice",
			es: "Tajo Pluma",
			it: "Tranciapiuma",
			pt: "Pena Dilaceradora",
			de: "Federschnitt"
		},

		effect: {
			fr: "Vous pouvez défausser une carte de votre main. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			en: "You may discard a card from your hand. If you do, this attack does 70 more damage.",
			es: "Puedes descartar 1 carta de tu mano. Si lo haces, este ataque hace 70 puntos de daño más.",
			it: "Puoi scartare una delle carte che hai in mano. Se lo fai, questo attacco infligge 70 danni in più.",
			pt: "Você pode descartar 1 carta da sua mão. Se fizer isto, este ataque causará 70 pontos de dano a mais.",
			de: "Du kannst 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "70+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	regulationMark: "D",
	retreat: 0,
	stage: "Stage1",

	description: {
		en: "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock."
	}
}

export default card