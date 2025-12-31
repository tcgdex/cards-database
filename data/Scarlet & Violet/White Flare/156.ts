import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [508],
	set: Set,

	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		de: "Bissbark",
		it: "Stoutland",
		pt: "Stoutland",
		es: "Stoutland",
		'es-mx': "Stoutland"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
		de: "Terribark",
		it: "Herdier",
		pt: "Herdier",
		es: "Herdier",
		'es-mx': "Herdier"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Odor Sleuth",
			fr: "Flair",
			de: "Schnüffler",
			it: "Segugio",
			pt: "Farejador",
			es: "Rastreo",
			'es-mx': "Rastreo"
		},

		effect: {
			en: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			fr: "Lancez 3 pièces. De votre pile de défausse, ajoutez à votre main un nombre de cartes inférieur ou égal au nombre de côtés face obtenus.",
			de: "Wirf 3 Münzen. Nimm bis zu so viele Karten, wie du Kopf geworfen hast, aus deinem Ablagestapel auf deine Hand.",
			it: "Lancia tre volte una moneta. Prendi dalla tua pila degli scarti un numero di carte uguale o inferiore al numero di volte in cui è uscito testa e aggiungile a quelle che hai in mano.",
			pt: "Jogue 3 moedas. Coloque um número de cartas da sua pilha de descarte na sua mão até o número de caras.",
			es: "Lanza 3 monedas. Coge de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que te hayan salido y ponlas en tu mano.",
			'es-mx': "Lanza 3 monedas. Toma de tu pila de descartes una cantidad de cartas igual o inferior al número de caras que salieron y ponlas en tu mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Special Fang",
			fr: "Croc Spécial",
			de: "Spezial-Reißzähne",
			it: "Zannaspeciale",
			pt: "Presa Especial",
			es: "Colmillo Especial",
			'es-mx': "Colmillo Especial"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 100 more damage.",
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 100 pontos de dano a mais.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836194
	}
}

export default card