import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Froslass ex",
		fr: "Méga-Momartik-ex",
		es: "Mega-Froslass ex",
		'es-mx': "Mega-Froslass ex",
		de: "Mega-Frosdedje-ex",
		it: "Mega Froslass-ex",
		pt: "Mega Froslass ex"
	},

	illustrator: "Saboteri",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage1",
	dexId: [478],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Resentful Refrain",
			fr: "Complainte Rancunière",
			es: "Rencor Contenido",
			'es-mx': "Rencor Lírico",
			de: "Missgünstiger Refrain",
			it: "Ritornello Rancoroso",
			pt: "Refrão Ressentido"
		},

		effect: {
			en: "This attack does 50 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 50 dégâts pour chaque carte dans la main de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada carta en la mano de tu rival.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada carta en la mano de tu rival.",
			de: "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 50 Schadenspunkte zu.",
			it: "Questo attacco infligge 50 danni per ogni carta nella mano del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada carta na mão do seu oponente."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Absolute Snow",
			fr: "Neige Absolue",
			es: "Nieve Absoluta",
			'es-mx': "Nieve Absoluta",
			de: "Absoluter Schnee",
			it: "Neve Assoluta",
			pt: "Neve Absoluta"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676077,
		cardmarket: 869876
	}
}

export default card
