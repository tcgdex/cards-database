import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [895],
	set: Set,

	name: {
		'en-us': "Regidrago",
		'fr-fr': "Regidrago",
		'es-es': "Regidrago",
		'it-it': "Regidrago",
		'pt-br': "Regidrago",
		'de-de': "Regidrago"
	},

	illustrator: "DOM",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dragon's Hoard",
			'fr-fr': "Butin du Dragon",
			'es-es': "Tesoro del Dragón",
			'it-it': "Gruzzolo del Drago",
			'pt-br': "Tesouro do Dragão",
			'de-de': "Drachenhort"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand. You can't use more than 1 Dragon's Hoard Ability each turn.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu'à en avoir 4 en main. Vous ne pouvez utiliser qu'un talent Butin du Dragon par tour.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes robar cartas hasta que tengas 4 cartas en tu mano. No puedes usar más de 1 habilidad Tesoro del Dragón en cada turno.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi pescare fino ad avere quattro carte in mano. Puoi usare l'abilità Gruzzolo del Drago solo una volta per turno.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá comprar cartas até ter 4 cartas na sua mão. Você não pode usar mais de 1 Habilidade Tesouro do Dragão por turno.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du so lange Karten ziehen, bis du 4 Karten auf deiner Hand hast. Du kannst die Fähigkeit Drachenhort nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Fire", "Colorless"],

		name: {
			'en-us': "Giant Fangs",
			'fr-fr': "Crocs Géants",
			'es-es': "Colmillos Gigantes",
			'it-it': "Zanne Giganti",
			'pt-br': "Presas Gigantes",
			'de-de': "Riesenbeißer"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "An academic theory proposes that Regidrago's arms were once the head of an ancient dragon Pokémon. The theory remains unproven.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658779,
				tcgplayer: 272349
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658779,
				tcgplayer: 272349
			}
		},
	],
}

export default card
