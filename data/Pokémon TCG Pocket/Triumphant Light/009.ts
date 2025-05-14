import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		de: "Venuflibis",
		'pt-br': "Carnivine",
		ko: "무스틈니"
	},

	illustrator: "Shiburingaru",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		en: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
		fr: "Il attire sa proie avec sa salive odorante avant\nde la croquer. Il lui faut une journée pour l'avaler.",
		es: "Atrae a sus presas con saliva de olor dulce y\nlas mastica. Tarda todo un día en comérselas.",
		it: "Attira le prede con il dolce aroma della saliva e poi\nle ingoia. Impiega un giorno per mangiare una preda.",
		de: "Sein süßlich riechender Speichel zieht Beute an,\ndie es frisst. Es braucht einen Tag, sie zu fressen.",
		'pt-br': "Atrai presas com sua saliva doce e depois as mastiga.\nLeva um dia inteiro para comer uma presa.",
		ko: "달콤한 냄새의 타액으로 먹이를\n끌어들여 큰 턱으로 꿀꺽한다.\n하루에 걸쳐 먹이를 먹는다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Power Link",
			fr: "Lien Puissance",
			es: "Vínculo Poderoso",
			it: "Potenza Simbiotica",
			de: "Kraftkopplung",
			'pt-br': "Elo de Poder",
			ko: "파워 링크"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, attacks used by this Pokémon do +30 damage to your opponent's Active Pokémon.",
			fr: "Si vous avez Arceus ou Arceus-ex en jeu, les attaques utilisées par ce Pokémon infligent + 30 dégâts au Pokémon Actif de votre adversaire.",
			es: "Si tienes a Arceus o Arceus ex en juego, los ataques de este Pokémon hacen Arceus+30 puntos[/Ctrl:NoBreak] de daño al Pokémon Activo de tu rival.",
			it: "Se hai in gioco Arceus o Arceus-ex, gli attacchi usati da questo Pokémon infliggono +30 danni al Pokémon attivo del tuo avversario.",
			de: "Wenn du Arceus oder Arceus-ex im Spiel hast, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners + 30 Schadenspunkte zu.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, os ataques usados por este Pokémon causarão +30 pontos de dano ao Pokémon Ativo do seu oponente.",
			ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」Arceus 있다면 이 포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지를 Arceus+30[/Ctrl:NoBreak]한다."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			de: "Rankenhieb",
			'pt-br': "Chicote de Vinha",
			ko: "덩굴채찍"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
