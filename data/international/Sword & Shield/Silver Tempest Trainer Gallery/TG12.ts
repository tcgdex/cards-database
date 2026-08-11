import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [402],
	set: Set,

	name: {
		'en-us': "Kricketune V",
		'fr-fr': "Mélokrik V",
		'es-es': "Kricketune V",
		'it-it': "Kricketune V",
		'pt-br': "Kricketune V",
		'de-de': "Zirpeise V"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exciting Stage",
			'fr-fr': "Scène Palpitante",
			'es-es': "Escenario Emocionante",
			'it-it': "Vigorstadio",
			'pt-br': "Espetáculo Empolgante",
			'de-de': "Bühnenkunst"
		},

		effect: {
			'en-us': "Once during your turn, you may draw cards until you have 3 cards in your hand. If this Pokémon is in the Active Spot, you may draw cards until you have 4 cards in your hand instead. You can't use more than 1 Exciting Stage Ability each turn.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 3 en main. Si ce Pokémon est sur le Poste Actif, vous pouvez piocher des cartes jusqu'à en avoir 4 en main à la place.  Vous ne pouvez pas utiliser plus d'un talent Scène Palpitante par tour.",
			'es-es': "Una vez durante tu turno, puedes robar cartas hasta que tengas 3 cartas en tu mano. Si este Pokémon está en el Puesto Activo, puedes robar cartas hasta que tengas 4 cartas en tu mano en vez de 3. No puedes usar más de 1 habilidad Escenario Emocionante en cada turno.",
			'it-it': "Una sola volta durante il tuo turno, puoi pescare fino ad avere tre carte in mano. Se questo Pokémon è in posizione attiva, invece puoi pescare fino ad avere quattro carte in mano. Puoi usare l'abilità Vigorstadio solo una volta per turno.",
			'pt-br': "Uma vez durante o seu turno, você poderá comprar cartas até ter 3 cartas na sua mão. Se este Pokémon estiver no Campo Ativo, você poderá comprar cartas até ter 4 cartas na sua mão ao invés de 3. Você não pode usar mais de 1 Habilidade Espetáculo Empolgante por turno.",
			'de-de': "Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 3 Karten auf deiner Hand hast. Wenn dieses Pokémon in der Aktiven Position ist, kannst du stattdessen so lange Karten ziehen, bis du 4 Karten auf deiner Hand hast. Du kannst die Fähigkeit Bühnenkunst nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "X-Scissor",
			'fr-fr': "Plaie Croix",
			'es-es': "Tijera X",
			'it-it': "Forbice X",
			'pt-br': "Tesoura X",
			'de-de': "Kreuzschere"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 80 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 80 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 80 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682276,
				tcgplayer: 452028
			}
		},
	],
}

export default card
