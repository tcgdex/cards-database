import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Snorlax",
         ja: "Snorlax",
         fr: "Snorlax",
         de: "Snorlax",
         es: "Snorlax",
         it: "Snorlax",
         pt: "Snorlax",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [143],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Lolling About",
            ja: "むかつり",
            fr: "Se prélasser",
            de: "Herumlollen",
            es: "Reduciendo",
            it: "Lolling intorno",
            pt: "Lançando por aí",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Snorlax is your Active Pokmon, you may remove 1 damage counter from Snorlax. Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、SnorlaxがアクティブなPokmonである場合、Snorlaxから1ダメージカウンターを削除できます。 Snorlaxは今眠っています。 Snorlaxが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si Snorlax est votre pokmon actif, vous pouvez supprimer 1 compteur de dégâts de Snorlax. Snorlax est maintenant endormi. Cette puissance ne peut pas être utilisée si Snorlax est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie, wenn Snorlax Ihr aktives Pokmon ist, einen Schadenschalter aus Snorlax entfernen. Snorlax schläft jetzt. Diese Leistung kann nicht verwendet werden, wenn Snorlax von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si Snorlax es su Pokmon activo, puede eliminar 1 contador de daño de Snorlax. Snorlax ahora está dormido. Esta potencia no se puede usar si Snorlax se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, se Snorlax è il tuo Pokmon attivo, è possibile rimuovere 1 contatore di danni da Snorlax. Snorlax ora dorme. Questa potenza non può essere utilizzata se Snorlax è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o snorlax for o seu Pokmon ativo, você poderá remover 1 contador de danos do snorlax. Snorlax está agora dormindo. Esse poder não pode ser usado se o Snorlax for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Continuous Tumble",
            ja: "連続的なタンブル",
            fr: "Chute continue",
            de: "Kontinuierliches Sturz",
            es: "Caída continua",
            it: "Tumble continuo",
            pt: "Tumble contínuo",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 30 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 3,

};
