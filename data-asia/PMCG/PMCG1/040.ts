import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Electrode",
		ja: "電極",
		fr: "Électrode",
		de: "Elektrode",
		es: "Electrodo",
		it: "Elettrodo",
		pt: "Eletrodo",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Buzzap",
				ja: "バツァップ",
				fr: "Bourdonnement",
				de: "Buzzap",
				es: "Rumor",
				it: "Buzzap",
				pt: "Buzzap",
			},
			effect: {
				en: "Once during your turn, you may Knock Out this Pokmon and attach it to 1 of your other Pokmon as a Special Energy card. While this card is attached to a Pokmon, it provides every type of Energy but provides only 2 Energy at a time. This Pokmon Power can't be used if this Pokmon is Asleep, Confused, or Paralyzed.",
				ja: "ターン中に一度、このポクモンをノックアウトし、特別なエネルギーカードとして他のポクモンの1つにそれを取り付けることができます。このカードはポクモンに取り付けられていますが、あらゆる種類のエネルギーを提供しますが、一度に2つのエネルギーしか提供しません。このポクモンが眠っている、混乱し、麻痺している場合、このポクモンの力は使用できません。",
				fr: "Une fois pendant votre tour, vous pouvez éliminer ce Pokmon et le fixer à 1 de votre autre Pokmon comme carte d'énergie spéciale. Bien que cette carte soit attachée à un Pokmon, elle fournit tous les types d'énergie mais ne fournit que 2 énergie à la fois. Cette puissance Pokmon ne peut pas être utilisée si ce Pokmon est endormi, confus ou paralysé.",
				de: "Einmal in Ihrem Zug, können Sie dieses Pokmon ausschalten und an 1 Ihrer anderen Pokmon als spezielle Energiekarte anbringen. Während diese Karte an einem Pokmon angebracht ist, bietet sie jede Art von Energie, bietet jedoch nur 2 Energie gleichzeitig. Diese Pokmon -Kraft kann nicht verwendet werden, wenn dieses Pokmon schläft, verwirrt oder gelähmt ist.",
				es: "Una vez durante su turno, puede eliminar este Pokmon y adjuntarlo a 1 de su otro Pokmon como una tarjeta de energía especial. Si bien esta tarjeta está unida a un Pokmon, proporciona todo tipo de energía, pero proporciona solo 2 energía a la vez. Este poder de Pokmon no se puede usar si este Pokmon está dormido, confundido o paralizado.",
				it: "Una volta durante il tuo turno, puoi eliminare questo Pokmon e attaccarlo a 1 degli altri tuoi Pokmon come una speciale carta energetica. Mentre questa carta è collegata a un Pokmon, fornisce ogni tipo di energia ma fornisce solo 2 energia alla volta. Questa potenza di Pokmon non può essere utilizzata se questo Pokmon è addormentato, confuso o paralizzato.",
				pt: "Uma vez durante o seu turno, você pode nocautear este Pokmon e anexá -lo a 1 do seu outro Pokmon como um cartão de energia especial. Enquanto este cartão é anexado a um Pokmon, ele fornece todos os tipos de energia, mas fornece apenas 2 energia por vez. Esse poder do Pokmon não pode ser usado se esse Pokmon estiver dormindo, confuso ou paralisado.",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				en: "Thunder Jolt",
				ja: "サンダージョルト",
				fr: "Secousse du tonnerre",
				de: "Donnerstumpf",
				es: "Trueno",
				it: "Thunder Jolt",
				pt: "Trovão",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokemon also does 10 damage to itself.",
				ja: "コインをひっくり返します。尾の場合、このポケモンはそれ自体に10ダメージを与えます。",
				fr: "Retourner une pièce. Si Tails, ce Pokémon fait également 10 dégâts à lui-même.",
				de: "Eine Münze drehen. Wenn Schwänze, verursacht dieses Pokémon auch 10 Schäden an sich.",
				es: "Voltea una moneda. Si Tails, este Pokémon también hace 10 daños a sí mismo.",
				it: "Capovolgi una moneta. Se le code, questo Pokemon infligge anche 10 danni a se stesso.",
				pt: "Vire uma moeda. Se caudas, este Pokémon também causa 10 danos a si mesmo.",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
