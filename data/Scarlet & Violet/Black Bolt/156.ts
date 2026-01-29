import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [497],
	set: Set,

	name: {
		en: "Serperior ex",
		fr: "Majaspic-ex",
		de: "Serpiroyal-ex",
		it: "Serperior-ex",
		pt: "Serperior ex",
		es: "Serperior ex",
		'es-mx': "Serperior ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine",
		es: "Servine",
		'es-mx': "Servine"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Regal Cheer",
			fr: "Encouragement Majestueux",
			de: "Hoheitlicher Beifall",
			it: "Tifo Regale",
			pt: "Torcida Real",
			es: "Ovación Realeza",
			'es-mx': "Canto de Realeza"
		},

		effect: {
			en: "Attacks used by your Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Die von deinen Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati dai tuoi Pokémon infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques usados pelos seus Pokémon causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			es: "Los ataques usados por tus Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques usados por tus Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Command the Grass",
			fr: "Gouvernance Plante",
			de: "Gebieter der Pflanzen",
			it: "Dominio dell'Erba",
			pt: "Comandar a Grama",
			es: "Mandato Planta",
			'es-mx': "Mandato Frondoso"
		},

		effect: {
			en: "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck jusqu'à 3 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Du kannst dein Deck nach bis zu 3 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Puoi cercare nel tuo mazzo fino a tre carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por até 3 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Puedes buscar en tu baraja hasta 3 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo hasta 3 cartas y ponerlas en tu mano. Después, baraja las cartas de tu mazo."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836230
	}
}

export default card