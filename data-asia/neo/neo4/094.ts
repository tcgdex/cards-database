import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Dragonite",
         ja: "軽いドラゴナイト",
         fr: "Dragonite légère",
         de: "Leichter Dragonit",
         es: "Dragonita ligera",
         it: "Dragonite leggero",
         pt: "Dragonite leve",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Miraculous Wind",
            ja: "奇跡的な風",
            fr: "Vent miraculeux",
            de: "Wundersamer Wind",
            es: "Viento milagroso",
            it: "Vento miracoloso",
            pt: "Vento milagroso",
          },
          effect: {
            en: "As long as Light Dragonite is your Active Pokmon, each Special Energy card provides Colorless Energy instead of its usual type and its other effects stop working. This power stops working while Light Dragonite is Asleep, Confused, or Paralyzed.",
            ja: "軽いドラゴナイトがアクティブなポクモンである限り、各特別エネルギーカードは通常のタイプではなく無色のエネルギーを提供し、その他の効果は機能しなくなります。このパワーは、軽いドラゴナイトが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Tant que Light Dragonite est votre Pokmon actif, chaque carte d'énergie spéciale fournit une énergie incolore au lieu de son type habituel et ses autres effets cessent de fonctionner. Ce pouvoir cesse de fonctionner tandis que la dragonite légère est endormie, confuse ou paralysée.",
            de: "Solange helles Dragonit Ihr aktives Pokmon ist, bietet jede spezielle Energiekarte farblose Energie anstelle ihres üblichen Typs und ihre anderen Effekte hören auf zu funktionieren. Diese Kraft hört auf zu arbeiten, während leichter Dragonit schläft, verwirrt oder gelähmt ist.",
            es: "Mientras Light Dragonite sea su Pokmon activo, cada tarjeta de energía especial proporciona energía incolora en lugar de su tipo habitual y sus otros efectos dejan de funcionar. Este poder deja de funcionar mientras Light Dragonite está dormido, confundido o paralizado.",
            it: "Finché la dragonite leggera è il tuo Pokmon attivo, ogni speciale carta energetica fornisce energia incolore invece del suo solito tipo e gli altri effetti smettono di funzionare. Questo potere smette di funzionare mentre la leggera dragonite è addormentata, confusa o paralizzata.",
            pt: "Enquanto o Dragonite leve for o seu Pokmon ativo, cada cartão de energia especial fornece energia incolor em vez de seu tipo usual e seus outros efeitos param de funcionar. Esse poder para de funcionar enquanto a dragonite leve está dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Light Wave",
            ja: "光波",
            fr: "Onde légère",
            de: "Lichtwelle",
            es: "Onda de luz",
            it: "Onda leggera",
            pt: "Onda leve",
          },
          effect: {
            en: "Prevent all effects of attacks, other than damage, done to Light Dragonite during your opponent's next turn.",
            ja: "対戦相手の次のターン中に、ダメージ以外のダメージ以外のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, autres que les dégâts, faits pour allumer Dragonite lors du prochain tour de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, die während der nächsten Runde Ihres Gegners licht, um Drachen zu leichten Drachen zu beleuchten.",
            es: "Evite todos los efectos de los ataques, aparte del daño, se hagan a Dragonite ligero durante el próximo turno de tu oponente.",
            it: "Prevenire tutti gli effetti degli attacchi, diversi dai danni, fatti per leggere la dragonite durante il turno successivo dell'avversario.",
            pt: "Evite todos os efeitos dos ataques, além de danos, causados à luz dragonita durante o próximo turno do seu oponente.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
