import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V",
		fr: "Zacian V",
		es: "Zacian V",
		it: "Zacian V",
		pt: "Zacian V",
		de: "Zacian V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Roar of the Sword",
			fr: "Hurlement de l'Épée",
			es: "Rugido de la Espada",
			it: "Boato della Spada",
			pt: "Rugido da Espada",
			de: "Gebrüll des Schwertes"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Psychic, puis l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Psychic y unirla a 1 de tus Pokémon. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Psychic e assegnarla a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Energia Psychic no seu baralho e ligá-la a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Psychic-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Storm Slash",
			fr: "Tranche Tempête",
			es: "Estocada Tormentosa",
			it: "Laceratempesta",
			pt: "Talho Tempestuoso",
			de: "Sturmschlitzer"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card