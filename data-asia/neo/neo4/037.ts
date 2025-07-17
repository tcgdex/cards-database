import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Octillery",
         ja: "ダークオクタリリー",
         fr: "Endite sombre",
         de: "Dunkle Oktillerie",
         es: "Octillería oscura",
         it: "Octillery oscuro",
         pt: "Octilaria escura",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [224],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Ink Blast",
            ja: "インクブラスト",
            fr: "Explosion d'encre",
            de: "Tinte Explosion",
            es: "Explosión de tinta",
            it: "Blast di inchiostro",
            pt: "Explosão de tinta",
          },
          effect: {
            en: "This attack does 20 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "この攻撃は、20のダメージに加えて20のダメージを加えて、ダークオクリリーに取り付けられた各エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque énergie attachée aux octtilleries sombres, mais pas utilisée pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede an dunklen Oktillerie verbundene Energie, aber nicht verwendet, um die Energiekosten dieses Angriffs zu bezahlen. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Este ataque hace 20 daños más 10 daños más por cada energía unida a la octillería oscura, pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Questo attacco infligge 20 danni più 10 danni per ogni energia attaccata all'ottilleria scura ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Este ataque causa 20 de dano mais 10 mais danos a cada energia associada à octilaria escura, mas não costumava pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Tentacle Wrap",
            ja: "触手ラップ",
            fr: "Enveloppe de tentacule",
            de: "Tentakelverpackung",
            es: "Envoltura del tentáculo",
            it: "Avvolgimento del tentacolo",
            pt: "Tentacle Wrap",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, during your opponent's next turn, your opponent pays Colorless more to retreat the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。テールの場合、対戦相手の次のターン中に、対戦相手はディフェンディングポケモンを退却するために無色になります。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, lors du prochain tour de votre adversaire, votre adversaire paie davantage incolore pour retirer le Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze während der nächsten Runde Ihres Gegners, zahlt Ihr Gegner mehr farblos, um das verteidigende Pokemon zurückzuziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, durante el próximo turno de tu oponente, tu oponente paga más incoloro para retirar al Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, durante il prossimo turno del tuo avversario, il tuo avversario paga incolore di più per ritirare il Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, durante o próximo turno do seu oponente, seu oponente paga mais incolusmente para recuar o Pokémon defensor.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
