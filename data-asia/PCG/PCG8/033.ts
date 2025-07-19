import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Alakazam Star",
         ja: "アラカザムスター",
         fr: "Étoile d'Alakazam",
         de: "Alakazam Star",
         es: "Estrella de Alakazam",
         it: "Alakazam Star",
         pt: "Alakazam Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [65],
      hp: 80,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psychic Select",
            ja: "サイキックセレクト",
            fr: "SELECT Psychique",
            de: "Psychische Auswahl",
            es: "Psychic Select",
            it: "Seleziona psichica",
            pt: "Seleção psíquica",
          },
          effect: {
            en: "Put any 1 card from your discard pile into your hand.",
            ja: "廃棄の山から1枚のカードを手に入れます。",
            fr: "Mettez une carte 1 de votre tas de défausse dans votre main.",
            de: "Legen Sie eine 1 -Karte von Ihrem Ablagerungsstapel in Ihre Hand.",
            es: "Pon cualquier tarjeta de 1 de tu pila de descarte en tu mano.",
            it: "Metti in mano qualsiasi carta 1 dalla tua pila di scarto.",
            pt: "Coloque qualquer 1 cartão da sua pilha de descarte em sua mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Skill Copy",
            ja: "スキルコピー",
            fr: "Copie de compétences",
            de: "Fähigkeitskopie",
            es: "Copia de habilidad",
            it: "Copia di abilità",
            pt: "Cópia de habilidade",
          },
          effect: {
            en: "Discard a Basic Pokemon or Evolution card from your hand. Choose 1 of that card's attacks. Skill Copy copies that attack. This attack does nothing if Alakazam {{Star|this Pokemon}} doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.)  Alakazam {{Star|This Pokemon}} performs that attack.",
            ja: "あなたの手から基本的なポケモンまたは進化カードを捨ててください。そのカードの攻撃の1つを選択します。スキルコピーはその攻撃をコピーします。この攻撃は、Alakazam {{Star | This Pokemon}}がその攻撃を使用するのに必要なエネルギーを持っていない場合、何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Alakazam {{Star | This Pokemon}}その攻撃を実行します。",
            fr: "Jetez une carte Pokémon ou Evolution de base de votre main. Choisissez 1 des attaques de cette carte. Copie de compétence copie qui attaque. Cette attaque ne fait rien si Alakazam {{Star | Ce pokemon}} n'a pas l'énergie nécessaire pour utiliser cette attaque. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) Alakazam {{Star | Ce pokemon}} effectue cette attaque.",
            de: "Verwerfen Sie eine einfache Pokemon- oder Evolutionskarte von Ihrer Hand. Wählen Sie 1 der Angriffe dieser Karte. Fertigkeitskopien kopieren diesen Angriff. Dieser Angriff tut nichts, wenn Alakazam {{star | dieses Pokemon}} nicht über die Energie verfügt, die erforderlich ist, um diesen Angriff zu verwenden. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) Alakazam {{stern | this pokemon}} führt diesen Angriff aus.",
            es: "Deseche una tarjeta de evolución o Pokémon básica de su mano. Elija 1 de los ataques de esa carta. Copias de copia de habilidad que atacan. Este ataque no hace nada si Alakazam {{Star | este pokemon}} no tiene la energía necesaria para usar ese ataque. (Aún debes hacer cualquier otra cosa necesaria para ese ataque.) Alakazam {{Star | This Pokemon}} realiza ese ataque.",
            it: "Scarta una carta di Pokemon o Evolution di base dalla tua mano. Scegli 1 degli attacchi di quella carta. Copia di abilità copia quell'attacco. Questo attacco non fa nulla se Alakazam {{Star | questo Pokemon}} non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) Alakazam {{Star | questo Pokemon}} esegue quell'attacco.",
            pt: "Descarte um cartão de Pokémon ou evolução básico da sua mão. Escolha 1 dos ataques desse cartão. Cópia de habilidade cópia que ataque. Este ataque não faz nada se Alakazam {{Star | this Pokemon}} não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) Alakazam {{Star | This Pokemon}} executa esse ataque.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
