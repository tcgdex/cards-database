import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Gormandize",
			fr: "Goinfrerie",
			es: "Glotonear",
			it: "Rimpinzarsi",
			pt: "Gulodice",
			de: "Schlemmen"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may draw cards until you have 7 cards in your hand. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu'à en avoir 7 en main. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes robar cartas hasta que tengas 7 cartas en tu mano. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi pescare fino ad avere sette carte in mano. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá comprar cartas até ter 7 cartas na sua mão. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du so lange Karten ziehen, bis du 7 Karten auf deiner Hand hast. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			de: "Bodyslam"
		},

		damage: 100,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	illustrator: "Saki Hayashiro",

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
	},

	regulationMark: "D"
}

export default card
