import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Lugia ex",
         ja: "Lugia Ex",
         fr: "Lugia ex",
         de: "Lugia ex",
         es: "Lugia ex",
         it: "Lugia ex",
         pt: "Lugia Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [249],
      hp: 100,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Silver Sparkle",
            ja: "銀の輝き",
            fr: "Étincelle argentée",
            de: "Silberfunkeln",
            es: "Brillo plateado",
            it: "Split d'argento",
            pt: "Brilho prateado",
          },
          effect: {
            en: "If Lugia ex is your Active PokÃ©mon and is damaged by an opponent's attack (even if Lugia ex is Knocked Out), flip a coin. If heads, choose an Energy card attached to the Attacking PokÃ©mon and return it to your opponent's hand.",
            ja: "Lugia Exがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Lugia Exがノックアウトされたとしても）、コインをひっくり返します。頭の場合は、攻撃するポカモンに取り付けられたエネルギーカードを選択し、相手の手に返します。",
            fr: "Si Lugia Ex est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Lugia ex est éliminé), retournez une pièce. Si les têtes, choisissez une carte d'énergie attachée au Poké attaquant et retournez-la à la main de votre adversaire.",
            de: "Wenn Lugia EX Ihr aktiver Pokémon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Lugia EX ausgeschaltet wird), drehen Sie eine Münze um. Wenn Sie Köpfe haben, wählen Sie eine Energiekarte, die an den angreifenden Poké Mon Mon Mon Mon angeschlossen ist, und geben Sie sie an die Hand Ihres Gegners zurück.",
            es: "Si Lugia ex es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Lugia Ex es noqueada), voltea una moneda. Si se dirige, elija una carta de energía unida al Poké Mon atacante y devuélvala a la mano de tu oponente.",
            it: "Se Lugia ex è il tuo poké attivo ed è danneggiato dall'attacco di un avversario (anche se Lugia Ex viene eliminato), capovolgi una moneta. Se le teste, scegli una carta energetica collegata al poké lunedì e restituila alla mano del tuo avversario.",
            pt: "Se o Lugia ex é o seu Poké Mon ativo e for danificado pelo ataque de um oponente (mesmo que Lugia ex seja nocauteado), vire uma moeda. Se as cabeças, escolha um cartão de energia anexado ao Poké Mon atacante e devolva -o à mão do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Water", "Lightning"],
          name: {
            en: "Elemental Blast",
            ja: "エレメンタルブラスト",
            fr: "Explosion élémentaire",
            de: "Elementare Explosion",
            es: "Explosión elemental",
            it: "Esplosione elementare",
            pt: "Explosão elementar",
          },
          effect: {
            en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia ex.",
            ja: "Lugia Exに取り付けられた火エネルギー、水エネルギー、稲妻エネルギーを廃棄します。",
            fr: "Jeter une énergie d'incendie, l'énergie de l'eau et l'énergie de foudre attachée à Lugia Ex.",
            de: "Brandenergie, Wasserergie und Blitzergie an Lugia ex.",
            es: "Deseche una energía de fuego, energía de agua y energía de rayo unida a Lugia Ex.",
            it: "Scartare un'energia antincendio, l'energia idrica e l'energia dei fulmini attaccati a Lugia Ex.",
            pt: "Descarte a energia de incêndio, a energia da água e a energia de raios ligada a Lugia Ex.",
          },
          damage: 200,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
