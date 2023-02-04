import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Kricketune V",
		fr: "Mélokrik V",
		es: "Kricketune V",
		it: "Kricketune V",
		pt: "Kricketune V",
		de: "Zirpeise V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exciting Stage",
			fr: "Scène Palpitante",
			es: "Escenario Emocionante",
			it: "Vigorstadio",
			pt: "Espetáculo Empolgante",
			de: "Bühnenkunst"
		},

		effect: {
			en: "Once during your turn, you may draw cards until you have 3 cards in your hand. If this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand instead. You can't use more than 1 Exciting Stage Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 3 en main. Si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu'à en avoir 4 en main à la place.  Vous ne pouvez pas utiliser plus d'un talent Scène Palpitante par tour.",
			es: "Una vez durante tu turno, puedes robar cartas hasta que tengas 3 cartas en tu mano. Si este Pokémon está en el Puesto Activo, puedes robar cartas hasta que tengas 4 cartas en tu mano en vez de 3. No puedes usar más de 1 habilidad Escenario Emocionante en cada turno.",
			it: "Una sola volta durante il tuo turno, puoi pescare fino ad avere tre carte in mano. Se questo Pokémon è in posizione attiva, invece puoi pescare fino ad avere quattro carte in mano. Puoi usare l'abilità Vigorstadio solo una volta per turno.",
			pt: "Uma vez durante o seu turno, você poderá comprar cartas até ter 3 cartas na sua mão. Se este Pokémon estiver no Campo Ativo, você poderá comprar cartas até ter 4 cartas na sua mão ao invés de 3. Você não pode usar mais de 1 Habilidade Espetáculo Empolgante por turno.",
			de: "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast. Wenn dieses Pokémon in der Aktiven Position ist, kannst du stattdessen so lange Karten ziehen, bis du 4 Karten auf deiner Hand hast. Du kannst die Fähigkeit Bühnenkunst nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "X-Scissor",
			fr: "Plaie Croix",
			es: "Tijera X",
			it: "Forbice X",
			pt: "Tesoura X",
			de: "Kreuzschere"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 80 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card