import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Jolteon - 037/088",
         ja: "Jolteon -037/088",
         fr: "Jolteon - 037/088",
         de: "Jolteon - 037/088",
         es: "Jolteon - 037/088",
         it: "Jolteon - 037/088",
         pt: "Jolteon - 037/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [135],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Self-healing",
            ja: "自己癒し",
            fr: "Auto-guérison",
            de: "Selbstheilung",
            es: "Autosanación",
            it: "Auto-guarigione",
            pt: "Auto-cicatrização",
          },
          effect: {
            en: "Whenever you attach a Lightning Energy card from your hand to Jolteon, remove all Special Conditions affecting Jolteon.",
            ja: "手からジョルテオンに稲妻エネルギーカードを取り付けるときはいつでも、ジョルテオンに影響を与えるすべての特別な条件を削除します。",
            fr: "Chaque fois que vous attachez une carte d'énergie Lightning de votre main à Jolteon, retirez toutes les conditions spéciales affectant Jolteon.",
            de: "Wenn Sie eine Blitzelenergiekarte von Ihrer Hand an Jolteon anbringen, entfernen Sie alle speziellen Bedingungen, die Jolteon betreffen.",
            es: "Cada vez que adjunta una tarjeta de energía Lightning de su mano a Jolteon, elimine todas las condiciones especiales que afectan a Jolteon.",
            it: "Ogni volta che si collega una carta di energia Lightning dalla mano a Jolteon, rimuovere tutte le condizioni speciali che colpiscono Jolteon.",
            pt: "Sempre que você anexar um cartão de energia raios da sua mão a Jolteon, remova todas as condições especiais que afetam o Jolteon.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Thundershock",
            ja: "サンダーショック",
            fr: "Thundershock",
            de: "Donnerschock",
            es: "Tortuga",
            it: "Thundershock",
            pt: "Thundershock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Thunderspark",
            ja: "サンダーパーク",
            fr: "Mine",
            de: "Donnerspark",
            es: "Parque",
            it: "Thunderspark",
            pt: "Thunderspark",
          },
          effect: {
            en: "This attack does 10 damage to each Benched Pokemon with at least 1 Energy card attached to it (yours and your opponent's).",
            ja: "この攻撃は、少なくとも1つのエネルギーカード（あなたと相手）に1つのエネルギーカードが取り付けられた各ベンチポケモンに10ダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts à chaque Pokémon banc avec au moins 1 carte d'énergie qui lui est attachée (la vôtre et celle de votre adversaire).",
            de: "Dieser Angriff schädigt 10 Pokémon mit mindestens 1 daran befestigter Energiedahme (mit Ihrem Gegner).",
            es: "Este ataque hace 10 daños a cada Pokémon en banca con al menos 1 carta de energía unida a ella (la tuya y la de tu oponente).",
            it: "Questo attacco infligge 10 danni a ciascun Pokemon in panchina con almeno 1 carta di energia collegata ad esso (il tuo e quello del tuo avversario).",
            pt: "Este ataque causa 10 danos a cada Pokémon em banco com pelo menos 1 cartão de energia anexado a ele (o seu e o seu oponente).",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
