import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Raichu V",
		fr: "Raichu V",
		es: "Raichu V",
		it: "Raichu V",
		pt: "Raichu V",
		de: "Raichu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Fast Charge",
			fr: "Charge Express",
			es: "Carga Veloz",
			it: "Velocicarica",
			pt: "Carga Veloz",
			de: "Schneller Ladevorgang"
		},

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque pendant votre premier tour. Cherchez dans votre deck une carte Énergie Lightning, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Dynamic Spark",
			fr: "Étincelle Dynamique",
			es: "Chispa Dinámica",
			it: "Dinamiscintilla",
			pt: "Faísca Dinâmica",
			de: "Dynamischer Funke"
		},

		effect: {
			en: "You may discard any amount of Lightning Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergie Lightning que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar cualquier cantidad de Energías Lightning de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie Lightning che vuoi dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar qualquer quantidade de Energia Lightning dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			de: "Du kannst beliebig viele Lightning-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608495
	}
}

export default card
