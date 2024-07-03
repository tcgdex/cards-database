import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Miascarade-ex",
		en: "Meowscarada ex",
		es: "Meowscarada ex",
		it: "Meowscarada-ex",
		pt: "Meowscarada ex",
		de: "Maskagato-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Bouquet Magique",
			en: "Bouquet Magic",
			es: "Magia Floral",
			it: "Bouquet Magico",
			pt: "Buquê Mágico",
			de: "Bouquetmagie"
		},

		effect: {
			fr: "Vous devez défausser une carte Énergie Grass de base de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			en: "You must discard a Basic Grass Energy card from your hand in order to use this Ability. Once during your turn, you may put 3 damage counters on 1 of your opponent's Benched Pokémon.",
			es: "Debes descartar 1 carta de Energía Grass Básica de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes poner 3 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			it: "Devi scartare una carta Energia base Grass che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi mettere tre segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Você deve descartar uma carta de Energia Grass Básica da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá colocar 3 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			de: "Du musst 1 Basis-Grass-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Griffes Griffantes",
			en: "Scratching Nails",
			es: "Uñas Rasgadoras",
			it: "Unghie Graffianti",
			pt: "Unhas Arranhadoras",
			de: "Kratzende Krallen"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card