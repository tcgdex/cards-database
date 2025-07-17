import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Pupitar",
         ja: "ダークプリター",
         fr: "Pupiaire sombre",
         de: "Dunkler Puppitar",
         es: "Pupitarra oscura",
         it: "Dark Pupitar",
         pt: "FULHO DARENTE",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [247],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Rock Tackle",
            ja: "ロックタックル",
            fr: "Tacle rocheux",
            de: "Rock Tackle",
            es: "Tackle rock",
            it: "Attrezzatura di roccia",
            pt: "Tackle rock",
          },
          effect: {
            en: "Dark Pupitar does 10 damage to itself. Dark Pupitar can't use this attack during your next turn.",
            ja: "Dark Pupitarはそれ自体に10ダメージを与えます。 Dark Pupitarは次のターン中にこの攻撃を使用できません。",
            fr: "Dark Pupitar fait 10 dégâts à lui-même. L'esquive noire ne peut pas utiliser cette attaque lors de votre prochain tour.",
            de: "Dark Pupitar schädigt sich 10. Dark Pupitar kann diesen Angriff in Ihrer nächsten Kurve nicht verwenden.",
            es: "Dark Pupitar hace 10 daños a sí mismo. Dark Pupitar no puede usar este ataque durante su próximo turno.",
            it: "Dark Politar fa 10 danni a se stesso. Dark Puchitar non può usare questo attacco durante il tuo prossimo turno.",
            pt: "O Dark Pupitar causa 10 danos a si mesmo. O Dark Pupitar não pode usar esse ataque durante o próximo turno.",
          },
          damage: 40,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Explosive Evolution",
            ja: "爆発的な進化",
            fr: "Évolution explosive",
            de: "Explosive Entwicklung",
            es: "Evolución explosiva",
            it: "Evoluzione esplosiva",
            pt: "Evolução explosiva",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokemon. Don't apply Weakness and Resistance. Then, search your deck for an Evolution card named Dark Tyranitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。次に、Dark Tyranitarという名前の進化カードをデッキに検索し、Dark Pupitarに置きます。 （これは進化する暗い生徒としてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon de votre adversaire. N'appliquez pas la faiblesse et la résistance. Ensuite, recherchez votre jeu une carte d'évolution nommée Dark Tyranitar et mettez-la sur Dark Pupiter. (Cela compte comme une popitaire sombre en évolution.) Mélanger votre deck par la suite.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf den Pokémon Ihres Gegners 10 Schaden zufügt. Wenden Sie keine Schwäche und Widerstand an. Suchen Sie dann Ihr Deck nach einer Evolutionskarte namens Dark Tyranitar und setzen Sie es auf Dark Pupitar. (Dies gilt als sich weiterentwickelnde dunkle Pupitar.) Danach mischen Sie Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de tu oponente. No aplique debilidad y resistencia. Luego, busque en su mazo una tarjeta de evolución llamada Dark Tyranitar y póngalo en Pupitar Dark. (Esto cuenta como una pupitar oscura evolucionada). Arriba tu mazo después.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza e resistenza. Quindi, cerca nel tuo mazzo una scheda di evoluzione di nome Dark Tyranitar e mettila su Dark Pupitar. (Questo conta come evoluzione di pupiter scuro.) Shuffle il tuo mazzo in seguito.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon do seu oponente. Não aplique fraqueza e resistência. Em seguida, procure seu baralho para obter uma carta de evolução chamada Dark Tyranitar e coloque -o no Dark Pupitar. (Isso conta como evolução da pupitar escura.) Reduza seu baralho depois.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
